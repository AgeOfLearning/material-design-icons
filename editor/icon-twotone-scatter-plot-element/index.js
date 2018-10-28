import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneScatterPlotElement
 * @class IconTwotoneScatterPlotElement
 * @extends {AoflElement}
 */
class IconTwotoneScatterPlotElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneScatterPlotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-scatter-plot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneScatterPlotElement.is, IconTwotoneScatterPlotElement);

export default IconTwotoneScatterPlotElement;
