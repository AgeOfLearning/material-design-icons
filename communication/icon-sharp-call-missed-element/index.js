import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCallMissedElement
 * @class IconSharpCallMissedElement
 * @extends {AoflElement}
 */
class IconSharpCallMissedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCallMissedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-call-missed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCallMissedElement.is, IconSharpCallMissedElement);

export default IconSharpCallMissedElement;
