import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundScatterPlotElement
 * @class IconRoundScatterPlotElement
 * @extends {AoflElement}
 */
class IconRoundScatterPlotElement extends AoflElement {
  /**
   * Creates an instance of IconRoundScatterPlotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-scatter-plot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundScatterPlotElement.is, IconRoundScatterPlotElement);

export default IconRoundScatterPlotElement;
