import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePlayCircleOutlineElement
 * @class IconOutlinePlayCircleOutlineElement
 * @extends {AoflElement}
 */
class IconOutlinePlayCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePlayCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-play-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePlayCircleOutlineElement.is, IconOutlinePlayCircleOutlineElement);

export default IconOutlinePlayCircleOutlineElement;
