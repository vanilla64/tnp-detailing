import {LayoutWrapper} from "@/components/LayoutWrapper/LayoutWrapper";

export const Header = () => {
  return (
    <header>
      <LayoutWrapper>
        <div
          className="
            flex justify-center
            xl:items-center xl:justify-between
          "
        >
          <h3>T.N.P. Detailing</h3>
          <a>+7 (961) 511-59-19</a>
        </div>
      </LayoutWrapper>
    </header>
  );
}
