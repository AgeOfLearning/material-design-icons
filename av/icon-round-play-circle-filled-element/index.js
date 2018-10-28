import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlayCircleFilledElement
 * @class IconRoundPlayCircleFilledElement
 * @extends {AoflElement}
 */
class IconRoundPlayCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlayCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-play-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlayCircleFilledElement.is, IconRoundPlayCircleFilledElement);

export default IconRoundPlayCircleFilledElement;
