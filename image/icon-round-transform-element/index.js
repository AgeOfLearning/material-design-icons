import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTransformElement
 * @class IconRoundTransformElement
 * @extends {AoflElement}
 */
class IconRoundTransformElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTransformElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-transform';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTransformElement.is, IconRoundTransformElement);

export default IconRoundTransformElement;
