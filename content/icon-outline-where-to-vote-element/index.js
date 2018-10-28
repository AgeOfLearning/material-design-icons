import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWhereToVoteElement
 * @class IconOutlineWhereToVoteElement
 * @extends {AoflElement}
 */
class IconOutlineWhereToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWhereToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-where-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWhereToVoteElement.is, IconOutlineWhereToVoteElement);

export default IconOutlineWhereToVoteElement;
