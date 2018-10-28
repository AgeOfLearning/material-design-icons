import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTrendingFlatElement
 * @class IconRoundTrendingFlatElement
 * @extends {AoflElement}
 */
class IconRoundTrendingFlatElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTrendingFlatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-trending-flat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTrendingFlatElement.is, IconRoundTrendingFlatElement);

export default IconRoundTrendingFlatElement;
