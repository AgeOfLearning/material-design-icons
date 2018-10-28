import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineClosedCaptionElement
 * @class IconOutlineClosedCaptionElement
 * @extends {AoflElement}
 */
class IconOutlineClosedCaptionElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineClosedCaptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-closed-caption';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineClosedCaptionElement.is, IconOutlineClosedCaptionElement);

export default IconOutlineClosedCaptionElement;
