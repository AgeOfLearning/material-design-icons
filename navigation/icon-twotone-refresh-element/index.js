import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneRefreshElement
 * @class IconTwotoneRefreshElement
 * @extends {AoflElement}
 */
class IconTwotoneRefreshElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneRefreshElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-refresh';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneRefreshElement.is, IconTwotoneRefreshElement);

export default IconTwotoneRefreshElement;
