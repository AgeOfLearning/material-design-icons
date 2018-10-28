import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundIndeterminateCheckBoxElement
 * @class IconRoundIndeterminateCheckBoxElement
 * @extends {AoflElement}
 */
class IconRoundIndeterminateCheckBoxElement extends AoflElement {
  /**
   * Creates an instance of IconRoundIndeterminateCheckBoxElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-indeterminate-check-box';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundIndeterminateCheckBoxElement.is, IconRoundIndeterminateCheckBoxElement);

export default IconRoundIndeterminateCheckBoxElement;
