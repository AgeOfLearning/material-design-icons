import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAspectRatioElement
 * @class IconRoundAspectRatioElement
 * @extends {AoflElement}
 */
class IconRoundAspectRatioElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAspectRatioElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-aspect-ratio';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAspectRatioElement.is, IconRoundAspectRatioElement);

export default IconRoundAspectRatioElement;
