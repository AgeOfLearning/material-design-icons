import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHowToVoteElement
 * @class IconTwotoneHowToVoteElement
 * @extends {AoflElement}
 */
class IconTwotoneHowToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHowToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-how-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHowToVoteElement.is, IconTwotoneHowToVoteElement);

export default IconTwotoneHowToVoteElement;
