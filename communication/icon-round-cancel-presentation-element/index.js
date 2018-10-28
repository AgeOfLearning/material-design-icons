import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCancelPresentationElement
 * @class IconRoundCancelPresentationElement
 * @extends {AoflElement}
 */
class IconRoundCancelPresentationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCancelPresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-cancel-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCancelPresentationElement.is, IconRoundCancelPresentationElement);

export default IconRoundCancelPresentationElement;
