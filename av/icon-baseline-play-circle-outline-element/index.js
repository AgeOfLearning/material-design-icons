import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePlayCircleOutlineElement
 * @class IconBaselinePlayCircleOutlineElement
 * @extends {AoflElement}
 */
class IconBaselinePlayCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePlayCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-play-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePlayCircleOutlineElement.is, IconBaselinePlayCircleOutlineElement);

export default IconBaselinePlayCircleOutlineElement;
