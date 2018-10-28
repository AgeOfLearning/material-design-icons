import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlayForWorkElement
 * @class IconRoundPlayForWorkElement
 * @extends {AoflElement}
 */
class IconRoundPlayForWorkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlayForWorkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-play-for-work';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlayForWorkElement.is, IconRoundPlayForWorkElement);

export default IconRoundPlayForWorkElement;
