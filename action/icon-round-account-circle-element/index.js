import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccountCircleElement
 * @class IconRoundAccountCircleElement
 * @extends {AoflElement}
 */
class IconRoundAccountCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccountCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-account-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccountCircleElement.is, IconRoundAccountCircleElement);

export default IconRoundAccountCircleElement;
