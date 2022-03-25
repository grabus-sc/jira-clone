import { useState } from "react";
import { Breadcrumbs, breadcrumbsInfo } from "ui/components/breadcrumbs";
import { Input } from "ui/components/input";
import { ScrollArea } from "ui/components/scroll-area";
import { AvatarList, avatarListInfo } from "ui/containers/avatar-list";
import { CategoriesPanel } from "../categories-panel";
import { CategoriesPanelContext, CategoriesPanelContextProps } from "../board";
import styles from "./board.module.scss";

export const Board = (): JSX.Element => {
  const [ scrollDisabled, setScrollDisabled ] = useState<boolean>(false);

  const values: CategoriesPanelContextProps = {
    scrollDisabled,
    setScrollDisabled,
  }

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Breadcrumbs {...breadcrumbsInfo} />
        <h1 className={styles.title}>Sprint board</h1>
      </section>
      <section className={styles.tools}>
        <Input />
        <div className={styles.users}>
          <AvatarList {...avatarListInfo} />
        </div>
        <div className={styles.filters}>
          FILTERS
        </div>
      </section>
      <section className={styles.categories}>
        <CategoriesPanelContext.Provider value={values}>
          <ScrollArea width disabled={scrollDisabled}>
            <CategoriesPanel />
          </ScrollArea>
        </CategoriesPanelContext.Provider>
      </section>
    </div>
  )
}