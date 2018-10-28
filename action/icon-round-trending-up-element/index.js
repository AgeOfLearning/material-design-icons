import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTrendingUpElement
 * @class IconRoundTrendingUpElement
 * @extends {AoflElement}
 */
class IconRoundTrendingUpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTrendingUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-trending-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTrendingUpElement.is, IconRoundTrendingUpElement);

export default IconRoundTrendingUpElement;
