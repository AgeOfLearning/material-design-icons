import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLinearScaleElement
 * @class IconSharpLinearScaleElement
 * @extends {AoflElement}
 */
class IconSharpLinearScaleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLinearScaleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-linear-scale';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLinearScaleElement.is, IconSharpLinearScaleElement);

export default IconSharpLinearScaleElement;
