import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCancelPresentationElement
 * @class IconTwotoneCancelPresentationElement
 * @extends {AoflElement}
 */
class IconTwotoneCancelPresentationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCancelPresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cancel-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCancelPresentationElement.is, IconTwotoneCancelPresentationElement);

export default IconTwotoneCancelPresentationElement;
