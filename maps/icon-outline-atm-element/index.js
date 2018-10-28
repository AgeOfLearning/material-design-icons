import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAtmElement
 * @class IconOutlineAtmElement
 * @extends {AoflElement}
 */
class IconOutlineAtmElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAtmElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-atm';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAtmElement.is, IconOutlineAtmElement);

export default IconOutlineAtmElement;
