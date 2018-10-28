import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineNavigationElement
 * @class IconOutlineNavigationElement
 * @extends {AoflElement}
 */
class IconOutlineNavigationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineNavigationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-navigation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineNavigationElement.is, IconOutlineNavigationElement);

export default IconOutlineNavigationElement;
