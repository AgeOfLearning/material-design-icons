import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWhereToVoteElement
 * @class IconSharpWhereToVoteElement
 * @extends {AoflElement}
 */
class IconSharpWhereToVoteElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWhereToVoteElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-where-to-vote';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWhereToVoteElement.is, IconSharpWhereToVoteElement);

export default IconSharpWhereToVoteElement;
