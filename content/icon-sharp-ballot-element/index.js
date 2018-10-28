import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBallotElement
 * @class IconSharpBallotElement
 * @extends {AoflElement}
 */
class IconSharpBallotElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBallotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-ballot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBallotElement.is, IconSharpBallotElement);

export default IconSharpBallotElement;
