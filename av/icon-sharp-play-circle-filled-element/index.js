import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlayCircleFilledElement
 * @class IconSharpPlayCircleFilledElement
 * @extends {AoflElement}
 */
class IconSharpPlayCircleFilledElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlayCircleFilledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-play-circle-filled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlayCircleFilledElement.is, IconSharpPlayCircleFilledElement);

export default IconSharpPlayCircleFilledElement;
