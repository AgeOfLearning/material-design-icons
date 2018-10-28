import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBallotElement
 * @class IconBaselineBallotElement
 * @extends {AoflElement}
 */
class IconBaselineBallotElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBallotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-ballot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBallotElement.is, IconBaselineBallotElement);

export default IconBaselineBallotElement;
