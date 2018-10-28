import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBallotElement
 * @class IconOutlineBallotElement
 * @extends {AoflElement}
 */
class IconOutlineBallotElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBallotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-ballot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBallotElement.is, IconOutlineBallotElement);

export default IconOutlineBallotElement;
