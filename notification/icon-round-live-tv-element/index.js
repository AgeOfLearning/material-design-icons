import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLiveTvElement
 * @class IconRoundLiveTvElement
 * @extends {AoflElement}
 */
class IconRoundLiveTvElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLiveTvElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-live-tv';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLiveTvElement.is, IconRoundLiveTvElement);

export default IconRoundLiveTvElement;
