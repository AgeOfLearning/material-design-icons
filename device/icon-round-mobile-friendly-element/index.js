import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMobileFriendlyElement
 * @class IconRoundMobileFriendlyElement
 * @extends {AoflElement}
 */
class IconRoundMobileFriendlyElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMobileFriendlyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mobile-friendly';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMobileFriendlyElement.is, IconRoundMobileFriendlyElement);

export default IconRoundMobileFriendlyElement;
