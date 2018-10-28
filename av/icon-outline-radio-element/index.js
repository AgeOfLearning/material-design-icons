import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRadioElement
 * @class IconOutlineRadioElement
 * @extends {AoflElement}
 */
class IconOutlineRadioElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRadioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-radio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRadioElement.is, IconOutlineRadioElement);

export default IconOutlineRadioElement;
