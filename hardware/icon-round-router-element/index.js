import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundRouterElement
 * @class IconRoundRouterElement
 * @extends {AoflElement}
 */
class IconRoundRouterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundRouterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-router';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundRouterElement.is, IconRoundRouterElement);

export default IconRoundRouterElement;
