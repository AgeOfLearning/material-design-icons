import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCommuteElement
 * @class IconRoundCommuteElement
 * @extends {AoflElement}
 */
class IconRoundCommuteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCommuteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-commute';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCommuteElement.is, IconRoundCommuteElement);

export default IconRoundCommuteElement;
