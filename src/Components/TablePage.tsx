import * as React from "react";
import {
  CellMeasurer,
  CellMeasurerCache,
  Column,
  Table
} from "react-virtualized";

const WIDTH = 300;

const list = new Array(10)
  .fill(0)
  .map(x =>
    `Lonna Wrede:Curabitur dapibus nisi sed nisi dictum, in imperdiet urna posuere. Sed cursus magna ut vehicula rutrum. Donec tempus, augue id hendrerit pretium, mauris leo congue nulla, ac iaculis erat nunc in dolor. Ut tristique augue at congue molestie.`.slice(
      0,
      Math.random() * 300
    )
  );

export default class TablePage extends React.PureComponent {
  _cache = new CellMeasurerCache({
    fixedWidth: true,
    minHeight: 25
  });

  render() {
    return (
      <Table
        deferredMeasurementCache={this._cache}
        headerHeight={20}
        height={400}
        overscanRowCount={0}
        rowHeight={this._cache.rowHeight}
        rowGetter={this._rowGetter}
        rowCount={list.length}
        width={WIDTH}
      >
        <Column
          width={WIDTH}
          dataKey="random"
          label="Dynamic text"
          cellRenderer={this._columnCellRenderer}
        />
      </Table>
    );
  }

  _columnCellRenderer = ({ dataKey, parent, rowIndex }) => {
    const content = list[rowIndex];

    return (
      <CellMeasurer
        cache={this._cache}
        columnIndex={0}
        key={dataKey}
        parent={parent}
        rowIndex={rowIndex}
      >
        <div
          style={{
            border: "1px solid black",
            padding: 8
          }}
        >
          {content}
        </div>
      </CellMeasurer>
    );
  };

  _rowGetter = ({ index }) => {
    return list[index];
  };
}
