import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScatterPlotElement
 * @class IconSharpScatterPlotElement
 * @extends {AoflElement}
 */
class IconSharpScatterPlotElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScatterPlotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-scatter-plot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScatterPlotElement.is, IconSharpScatterPlotElement);

export default IconSharpScatterPlotElement;
