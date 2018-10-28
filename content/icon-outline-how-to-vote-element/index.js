import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineHowToVoteElement
 * @class IconOutlineHowToVoteElement
 * @extends {AoflElement}
 */
class IconOutlineHowToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineHowToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-how-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineHowToVoteElement.is, IconOutlineHowToVoteElement);

export default IconOutlineHowToVoteElement;
