import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRadioElement
 * @class IconSharpRadioElement
 * @extends {AoflElement}
 */
class IconSharpRadioElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRadioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-radio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRadioElement.is, IconSharpRadioElement);

export default IconSharpRadioElement;
