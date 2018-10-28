import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundClosedCaptionElement
 * @class IconRoundClosedCaptionElement
 * @extends {AoflElement}
 */
class IconRoundClosedCaptionElement extends AoflElement {
  /**
   * Creates an instance of IconRoundClosedCaptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-closed-caption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundClosedCaptionElement.is, IconRoundClosedCaptionElement);

export default IconRoundClosedCaptionElement;
