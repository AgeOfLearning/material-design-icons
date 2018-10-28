import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVignetteElement
 * @class IconRoundVignetteElement
 * @extends {AoflElement}
 */
class IconRoundVignetteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVignetteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-vignette';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVignetteElement.is, IconRoundVignetteElement);

export default IconRoundVignetteElement;
