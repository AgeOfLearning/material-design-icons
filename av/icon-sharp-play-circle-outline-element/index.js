import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlayCircleOutlineElement
 * @class IconSharpPlayCircleOutlineElement
 * @extends {AoflElement}
 */
class IconSharpPlayCircleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlayCircleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-play-circle-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlayCircleOutlineElement.is, IconSharpPlayCircleOutlineElement);

export default IconSharpPlayCircleOutlineElement;
