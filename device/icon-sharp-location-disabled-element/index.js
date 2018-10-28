import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocationDisabledElement
 * @class IconSharpLocationDisabledElement
 * @extends {AoflElement}
 */
class IconSharpLocationDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocationDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-location-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocationDisabledElement.is, IconSharpLocationDisabledElement);

export default IconSharpLocationDisabledElement;
