import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlayCircleOutlineElement
 * @class IconRoundPlayCircleOutlineElement
 * @extends {AoflElement}
 */
class IconRoundPlayCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlayCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-play-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlayCircleOutlineElement.is, IconRoundPlayCircleOutlineElement);

export default IconRoundPlayCircleOutlineElement;
