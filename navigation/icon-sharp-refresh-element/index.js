import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpRefreshElement
 * @class IconSharpRefreshElement
 * @extends {AoflElement}
 */
class IconSharpRefreshElement extends AoflElement {
  /**
   * Creates an instance of IconSharpRefreshElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-refresh';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpRefreshElement.is, IconSharpRefreshElement);

export default IconSharpRefreshElement;
