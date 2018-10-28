import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineEjectElement
 * @class IconOutlineEjectElement
 * @extends {AoflElement}
 */
class IconOutlineEjectElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineEjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-eject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineEjectElement.is, IconOutlineEjectElement);

export default IconOutlineEjectElement;
