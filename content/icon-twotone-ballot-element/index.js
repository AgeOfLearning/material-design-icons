import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBallotElement
 * @class IconTwotoneBallotElement
 * @extends {AoflElement}
 */
class IconTwotoneBallotElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBallotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-ballot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBallotElement.is, IconTwotoneBallotElement);

export default IconTwotoneBallotElement;
