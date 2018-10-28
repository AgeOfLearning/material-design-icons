import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTrendingDownElement
 * @class IconRoundTrendingDownElement
 * @extends {AoflElement}
 */
class IconRoundTrendingDownElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTrendingDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-trending-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTrendingDownElement.is, IconRoundTrendingDownElement);

export default IconRoundTrendingDownElement;
