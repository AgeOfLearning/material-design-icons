import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlayArrowElement
 * @class IconRoundPlayArrowElement
 * @extends {AoflElement}
 */
class IconRoundPlayArrowElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlayArrowElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-play-arrow';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlayArrowElement.is, IconRoundPlayArrowElement);

export default IconRoundPlayArrowElement;
