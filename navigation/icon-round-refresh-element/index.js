import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRefreshElement
 * @class IconRoundRefreshElement
 * @extends {AoflElement}
 */
class IconRoundRefreshElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRefreshElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-refresh';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRefreshElement.is, IconRoundRefreshElement);

export default IconRoundRefreshElement;
