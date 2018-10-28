import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRefreshElement
 * @class IconOutlineRefreshElement
 * @extends {AoflElement}
 */
class IconOutlineRefreshElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRefreshElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-refresh';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRefreshElement.is, IconOutlineRefreshElement);

export default IconOutlineRefreshElement;
