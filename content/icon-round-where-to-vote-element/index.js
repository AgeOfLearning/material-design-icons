import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWhereToVoteElement
 * @class IconRoundWhereToVoteElement
 * @extends {AoflElement}
 */
class IconRoundWhereToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWhereToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-where-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWhereToVoteElement.is, IconRoundWhereToVoteElement);

export default IconRoundWhereToVoteElement;
