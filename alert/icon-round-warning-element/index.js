import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWarningElement
 * @class IconRoundWarningElement
 * @extends {AoflElement}
 */
class IconRoundWarningElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWarningElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-warning';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWarningElement.is, IconRoundWarningElement);

export default IconRoundWarningElement;
