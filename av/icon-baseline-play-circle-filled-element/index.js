import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlayCircleFilledElement
 * @class IconBaselinePlayCircleFilledElement
 * @extends {AoflElement}
 */
class IconBaselinePlayCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlayCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-play-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlayCircleFilledElement.is, IconBaselinePlayCircleFilledElement);

export default IconBaselinePlayCircleFilledElement;
